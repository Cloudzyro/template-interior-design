# Unslop pass

Done with the unslop skill (unslop by Damir Sokolovsky, @heydamir, CC BY 4.0) on November 25, 2026.

## Audit

Light slop: built against the direction from the start, so this was polish mode. Signs found:

- Every project opened on the same view, a living room from the same angle, so the home page and the projects page repeated one picture in different colors (`site.ts`, `index.astro`, `projects/index.astro`)
- The project gallery at 16:9 ran past the first screen, hiding its caption and thumbnails (`projects/[slug].astro`)
- The home page process squeezed five steps into five narrow columns, wrapping two-word titles (`index.astro`)
- The gallery's next button shared a class with the "Next project" block and stretched into a tall pill (`projects/[slug].astro`), fixed before the first commit
- Body text at weight 300 (`global.css`), moved to 400 before the first commit

No gradients, glows, gradient text, emoji, pill badges, uppercase tracked labels, 700+ weights, italic emphasis, trailing periods on labels, hype words, looping motion or `transition-all` were found.

## Direction

- Product: a two-person residential interior design studio in the Hudson Valley, for homeowners looking at past work and starting a project
- Character: considered, tactile, quietly confident
- World: limewash, travertine, oak, linen and brass; limestone neutrals with deep olive as the one accent
- Moments: the large drawn rooms, each project in its own palette, and the gallery on every project page
- Signature: square material swatch chips with their names, used only on project pages

## Changes

- Spacing: home process in three columns with room for each title
- Color: no change needed (olive only on the primary button and the Inquire link; the rooms carry the color)
- Copy: no change needed
- Type: no change needed (Gilda Display for headlines only, Commissioner at 400 and 500)
- Layout: each project has a `cover` view, so lists show a living room, an entry hall, a limestone bath, a dark parlor and a cottage kitchen; the gallery is 2:1 on desktop (4:3 on phones) so the caption and thumbnails sit on the same screen
- Details: no change needed
- Motion: no change needed (opacity and color transitions only)

screenshot-2: Perry Street Apartment gallery with its caption and thumbnails
screenshot-3: Services and fees page
