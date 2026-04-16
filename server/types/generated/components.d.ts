import type { Schema, Struct } from '@strapi/strapi';

export interface MediaAddress extends Struct.ComponentSchema {
  collectionName: 'components_media_addresses';
  info: {
    displayName: 'Address';
    icon: 'lightbulb';
  };
  attributes: {
    address: Schema.Attribute.String;
    map: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MediaContacts extends Struct.ComponentSchema {
  collectionName: 'components_media_contacts';
  info: {
    displayName: 'Contacts';
    icon: 'attachment';
  };
  attributes: {
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    telegram_link: Schema.Attribute.String;
    telegram_username: Schema.Attribute.String;
    vk_link: Schema.Attribute.String;
  };
}

export interface MediaRequisites extends Struct.ComponentSchema {
  collectionName: 'components_media_requisites';
  info: {
    displayName: 'Requisites';
    icon: 'book';
  };
  attributes: {
    inn: Schema.Attribute.String;
    ip: Schema.Attribute.String;
    ogrn: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'media.address': MediaAddress;
      'media.contacts': MediaContacts;
      'media.requisites': MediaRequisites;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
