export const siteSettingsQuery = `*[_type == "siteSettings"][0]{siteName, logo, email, phone, instagram, linkedin, donationUrl, footerText}`;
export const eventsQuery = `*[_type == "event"] | order(date asc){_id, title, "slug": slug.current, date, time, location, type, excerpt, description, image, registrationUrl, featured}`;
export const eventBySlugQuery = `*[_type == "event" && slug.current == $slug][0]{_id, title, "slug": slug.current, date, time, location, type, excerpt, description, image, registrationUrl, featured}`;
export const peopleQuery = `*[_type == "person"] | order(order asc){_id, name, role, organization, bio, quote, image, imageAlt, order}`;
export const pressQuery = `*[_type == "pressArticle"] | order(date desc){_id, title, "slug": slug.current, date, medium, excerpt, url, image}`;
export const pressBySlugQuery = `*[_type == "pressArticle" && slug.current == $slug][0]{_id, title, "slug": slug.current, date, medium, excerpt, url, image}`;
export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{_id, title, "slug": slug.current, eyebrow, intro, heroImage, featureImage, secondaryImage, seoTitle, seoDescription}`;
