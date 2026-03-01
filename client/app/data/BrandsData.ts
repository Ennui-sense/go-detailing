import ZeekrImage from "~/assets/images/zeekr.png";
import MercedezImage from "~/assets/images/mercedez.png";
import SomeImage from "~/assets/images/some.png";
import ExeedImage from "~/assets/images/exeed.png";
import BmwImage from "~/assets/images/bmw.png";
import LexusImage from "~/assets/images/lexus.png";
import PorscheImage from "~/assets/images/porsche.png";
import NissanImage from "~/assets/images/nissan.png";

interface IBrand {
	id: number;
	imageSrc: string
}

export const BrandsData: IBrand[] = [
	{
		id: 1,
		imageSrc: ZeekrImage
	},
	{
		id: 2,
		imageSrc: MercedezImage
	},
	{
		id: 3,
		imageSrc: SomeImage
	},
	{
		id: 4,
		imageSrc: ExeedImage
	},
	{
		id: 5,
		imageSrc: BmwImage
	},
	{
		id: 6,
		imageSrc: LexusImage
	},
	{
		id: 7,
		imageSrc: PorscheImage
	},
	{
		id: 8,
		imageSrc: NissanImage
	}
];
