/**
 * A set of functions called "actions" for `vk-news`
 */

export default {
  getNews: async (ctx, next) => {
    try {
      const extractFirstPhoto = (attachments?: any[]) => {
        if (!attachments) return null;

        for (let a of attachments) {
          if (a.type === "video") return null; // если видео — откидываем весь пост
          if (a.type === "photo") {
            const sizes = a.photo.sizes;
            return sizes[sizes.length - 1].url;
          }
        }

        return null;
      };

      function cleanVkText(text) {
        const replacedDot =
          text[text.length - 1] === "." ? "" : text[text.length - 1];

        return text
          .replace(/\[([^\]|]+)\|([^\]]+)\]/g, "$2")
          .replace(text[text.length - 1], replacedDot);
      }

			const GROUP = { id: "-236120776", label: "МТИД" }

      const TOKEN =
        "b9200504b9200504b920050408ba1da6c1bb920b9200504d00dbcb618294f759c3cdee7";
      const VK_API = "https://api.vk.com/method";
      const VERSION = "5.199";

      async function getWall(owner_id) {
        const url = `${VK_API}/wall.get?access_token=${TOKEN}&owner_id=${owner_id}&count=100&v=${VERSION}&filter=owner`;

        const response = await fetch(url);
        let data: any = await response.json();

        data = data.response.items
          .map((item) => ({
            text: cleanVkText(item.text),
            photo: extractFirstPhoto(item.attachments),
            id: item.id,
            date: item.date,
            url: `https://vk.com/wall${item.owner_id}_${item.id}`,
          }))
          .filter((item) => item.text && item.photo !== null);

        return data;
      }

      const data_1 = await getWall(GROUP.id);

      const result = [...data_1];
      result.sort((a, b) => b.date - a.date);

      ctx.body = {
        result,
      };
    } catch (err) {
      ctx.body = err;
    }
  },
};
