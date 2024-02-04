import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // throw new Error('Loading meals failed')
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  // slug = ? better-sqlite3 projects '?' dynamic parameter from SQL injection
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed');
    }
  });

  // after have image on server, overwrite image data with relative path to the image location
  meal.image = `/images/${fileName}`

  db.prepare(`
  INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
  VALUES (
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug
  )
`).run(meal);
}
