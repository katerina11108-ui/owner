/**
 * All copy, verbatim from Figma (page "Dekstop" → "Desktop design", 62:14).
 * Nothing here is invented. The IMDB URL was supplied by the author after Phase 1.
 */

export const site = {
  title: 'Last Dream',
  description:
    'Last Dream showcases this practice through the lens of experimental horror, with vivid production design, spine-chilling acting, and rousing cinematic tension.',
};

export const credits = {
  director: 'Hugo Johnson',
  writer: 'Hugo Johnson',
  stars: [
    { name: 'Eloise Lovell Anderson' },
    { name: 'Brenda Patricia Garza' },
    { name: 'Oliver Mayo' },
  ],
};

export const statement = {
  label: 'A Provocative Cinematic Tale', // 62:36
  text: 'Did you know that the United States of America executed 17 prisoners in 2020?', // 62:37
};

export const lastMeal = {
  left: 'Whilst significantly less than in previous years, it bears reminding that 2020 was the year of a global pandemic. Of those 17 condemned, many would most likely have partaken in the customary ritual of the last meal.', // 62:29
  right: "This practice is steeped in religious ideology, with Jesus's Last Supper the most obvious comparison.", // 62:33
};

export const split = {
  left: "Proponents of capital punishment may support a prisoner's right to a last meal. Opponents will point to the moral dichotomy of it all; A comforting ruse, they might say, before killing them.", // 62:24
  right:
    'Last Dream showcases this practice through the lens of experimental horror, with vivid production design, spine-chilling acting, and rousing cinematic tension.', // 62:25
};

export const foreword = {
  heading: 'A foreword from the director', // 62:88
  columnRight: [
    // 62:20
    "Paying homage to the colour-rich films of yesteryear with a taboo subject wasn't easy – but it was enjoyable. From Dario Argento's Suspiria and Jacques Demy's The Umbrellas of Cherbourg to modern, obscure cult classics like Anna Biller's The Love Witch, Last Dream, both as a visual spectacle and a narrative piece of fiction aims to push cinematic boundaries and ignite uncomfortable conversations among its viewers.",
    'None of this would have been possible without Amy Griffith, owner of Eaton House Studio. I came across Amy\'s coral pink behemoth in a Vice article titled "Is this the most Wes Anderson house in the world?"',
    'Spurred on herself by a lack of creative opportunities during the Coronavirus lockdown, she gave a little-known director the keys to her own colourful world, spawning an unlikely film set – and creative partnership.',
  ],
  columnCenter: [
    // 62:39
    "The film's themes (forgiveness, tragedy, biblical retribution to name but a few) are deeply humanistic elements of life's great tapestry of things. Specific themes may even resonate with viewers on a particularly personal level.",
    "As a British filmmaker (Britain abolished capital punishment in 1965), state-by-state legislation that governs the 50 states of America regularly piqued my interest, often spawning questions I wouldn't usually consider.",
  ],
};

export const quote =
  'Last Dream does not fall victim to personal sentiments (at least, this was never my intention). I hope that viewers form their own thoughts, opinions and ideas once the end credits roll, and perhaps new ones that I had not entertained as director.'; // 62:18

export const trailer = {
  heading: 'Official Teaser Trailer', // 62:61
  /** The trailer is no longer online (confirmed by the author). Set a URL here to enable playback. */
  url: null as string | null,
  /** Visible placeholder — not Figma copy. Remove once a trailer URL exists. */
  placeholder: 'Placeholder — trailer no longer available',
};

export const contacts = {
  heading: 'Contacts', // 62:82
  email: 'queries@lastdreamfilm.com', // 62:83
  imdbLabel: 'IMDB', // 62:84
  imdbUrl: 'https://www.imdb.com/title/tt22771274/', // supplied by the author
};
