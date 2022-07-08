import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'rtl9povy',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skIPek1G8OpQb7ycTyrd8gmA8OhaGUnZZFXbFueEALhGeZKaASgFTeNIwzwTmxvaBQ08dmrXylGPOA2887TmjK7d9p3iTQwELSP4x6mdRGIcJRlLJLIRaj1jHQgwYY6gNs1IbUct3Jn6Mwcr9FxHgGoui8Le3dC2uFgGbx6uFRWA9a9tRArO',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);