export interface SharpeCharacter {
  name: string;
  rank: string;
  nationality: string;
  role: string;
  fate: string;
  books: string[];
  tvFilms: string[];
  novelVsTV: string;
  type: 'recurring' | 'historical' | 'fictional';
  firstAppearance: string;
  uncertain: boolean;
}

export const sharpeCharacters: SharpeCharacter[] = [
  {
    name: "Richard Sharpe",
    rank: "Private, 33rd Regiment of Foot",
    nationality: "English (London-born; portrayed as Yorkshire in the TV series)",
    role: "Protagonist of the entire series. In Sharpe's Tiger he is a young private in the 33rd Foot serving in India. To escape the brutal Sergeant Hakeswill, he volunteers for a clandestine mission into the fortress of Seringapatam, posing as a deserter to make contact with a British prisoner and scout Tippu Sultan's defences.",
    fate: "Survives the siege of Seringapatam. Wins recognition from Colonel Wellesley and begins his slow rise from the ranks.",
    books: [
      "Sharpe's Tiger", "Sharpe's Triumph", "Sharpe's Fortress", "Sharpe's Trafalgar",
      "Sharpe's Prey", "Sharpe's Rifles", "Sharpe's Havoc", "Sharpe's Eagle",
      "Sharpe's Gold", "Sharpe's Escape", "Sharpe's Fury", "Sharpe's Battle",
      "Sharpe's Company", "Sharpe's Sword", "Sharpe's Enemy", "Sharpe's Honour",
      "Sharpe's Regiment", "Sharpe's Siege", "Sharpe's Revenge", "Sharpe's Waterloo",
      "Sharpe's Devil", "Sharpe's Assassin", "Sharpe's Command", "Sharpe's Storm",
    ],
    tvFilms: [
      "Sharpe's Rifles", "Sharpe's Eagle", "Sharpe's Company", "Sharpe's Enemy",
      "Sharpe's Honour", "Sharpe's Gold", "Sharpe's Battle", "Sharpe's Sword",
      "Sharpe's Regiment", "Sharpe's Siege", "Sharpe's Mission", "Sharpe's Revenge",
      "Sharpe's Justice", "Sharpe's Waterloo", "Sharpe's Challenge", "Sharpe's Peril",
    ],
    novelVsTV: "In the novels, Sharpe is London-born and cockney; in the TV series, Sean Bean plays him as a Yorkshireman. Cornwell accepted the change and has said Bean's portrayal influenced his later writing of the character.",
    type: "recurring",
    firstAppearance: "Sharpe's Tiger",
    uncertain: false,
  },
  {
    name: "Obadiah Hakeswill",
    rank: "Sergeant, 33rd Regiment of Foot",
    nationality: "English",
    role: "The series' principal recurring villain. In Sharpe's Tiger he is the brutal sergeant of Sharpe's company who flogs, robs and torments his men. His personal vendetta against Sharpe begins here. Hakeswill survived a botched hanging as a child, which left him with a facial twitch and a mad conviction that he cannot be killed.",
    fate: "Survives Seringapatam and returns in Sharpe's Triumph and Sharpe's Fortress. Eventually executed by firing squad in Sharpe's Enemy after murdering Teresa Moreno.",
    books: [
      "Sharpe's Tiger", "Sharpe's Triumph", "Sharpe's Fortress",
      "Sharpe's Company", "Sharpe's Enemy",
    ],
    tvFilms: ["Sharpe's Company", "Sharpe's Enemy"],
    novelVsTV: "Pete Postlethwaite's TV portrayal (in Sharpe's Company and Sharpe's Enemy) is widely regarded as definitive. The television Hakeswill is introduced in the Peninsular War; the India novels, which establish his origin as Sharpe's tormentor in the 33rd Foot, were written later and were never filmed.",
    type: "recurring",
    firstAppearance: "Sharpe's Tiger",
    uncertain: false,
  },
  {
    name: "Lieutenant William Lawford",
    rank: "Lieutenant, 33rd Regiment of Foot",
    nationality: "English",
    role: "Accompanies Sharpe on the mission into Seringapatam, posing as a fellow deserter. An officer of Sharpe's own regiment and a decent man who comes to respect Sharpe's resourcefulness during their captivity inside Tippu's fortress.",
    fate: "Survives Seringapatam. Returns to the regular army and rises through the ranks; later appears in the Peninsular novels as Colonel of the South Essex.",
    books: [
      "Sharpe's Tiger", "Sharpe's Triumph", "Sharpe's Fortress",
      "Sharpe's Havoc", "Sharpe's Regiment",
    ],
    tvFilms: [],
    novelVsTV: "Lawford does not appear in the TV adaptations.",
    type: "recurring",
    firstAppearance: "Sharpe's Tiger",
    uncertain: true,
  },
  {
    name: "Colonel Hector McCandless",
    rank: "Colonel, East India Company",
    nationality: "Scottish",
    role: "A Scottish Presbyterian officer of the East India Company serving as an intelligence officer. McCandless is Sharpe's first patron: honourable, devout, and a man whose incorruptibility is the moral counterweight to Hakeswill's venom. In Sharpe's Tiger he is a prisoner of Tippu Sultan whom Sharpe and Lawford must contact inside Seringapatam.",
    fate: "Survives Seringapatam. Returns as Sharpe's protector in Sharpe's Triumph and Sharpe's Fortress. Killed in action in Sharpe's Fortress.",
    books: ["Sharpe's Tiger", "Sharpe's Triumph", "Sharpe's Fortress"],
    tvFilms: [],
    novelVsTV: "McCandless does not appear in any TV adaptation. The India novels were never filmed.",
    type: "recurring",
    firstAppearance: "Sharpe's Tiger",
    uncertain: false,
  },
  {
    name: "Mary Bickerstaff",
    rank: "Camp follower",
    nationality: "Anglo-Indian (of mixed English and Indian parentage)",
    role: "The widow of a soldier in Sharpe's company, and Sharpe's lover during his service in India. When Hakeswill threatens her, Sharpe's determination to protect her becomes one of the engines of the novel's plot.",
    fate: "Leaves Sharpe at the end of the novel to make a life in India rather than follow him onward. Does not appear in later books.",
    books: ["Sharpe's Tiger"],
    tvFilms: [],
    novelVsTV: "Does not appear in the TV adaptations.",
    type: "fictional",
    firstAppearance: "Sharpe's Tiger",
    uncertain: true,
  },
  {
    name: "Arthur Wellesley",
    rank: "Colonel, 33rd Regiment of Foot",
    nationality: "Anglo-Irish",
    role: "The real historical figure, the future Duke of Wellington, commanding the 33rd Foot in India in 1799. In Sharpe's Tiger he is one of Harris's subordinate commanders at Seringapatam and the officer who sanctions the mission Sharpe volunteers for. Cornwell depicts him as cold, precise and professional, already the commander he would become in Spain.",
    fate: "Survives the siege. Goes on to become Major-General in Sharpe's Triumph and eventually Field Marshal and Duke of Wellington, appearing throughout the Peninsular and Waterloo novels.",
    books: [
      "Sharpe's Tiger", "Sharpe's Triumph", "Sharpe's Fortress", "Sharpe's Eagle",
      "Sharpe's Gold", "Sharpe's Battle", "Sharpe's Company", "Sharpe's Sword",
      "Sharpe's Honour", "Sharpe's Regiment", "Sharpe's Siege", "Sharpe's Revenge",
      "Sharpe's Waterloo", "Sharpe's Assassin", "Sharpe's Command", "Sharpe's Storm",
    ],
    tvFilms: [
      "Sharpe's Eagle", "Sharpe's Company", "Sharpe's Enemy", "Sharpe's Honour",
      "Sharpe's Sword", "Sharpe's Regiment", "Sharpe's Siege", "Sharpe's Revenge",
      "Sharpe's Waterloo",
    ],
    novelVsTV: "Played by David Troughton and later Hugh Fraser in the TV series. The TV Wellington is warmer and more avuncular than the cold, reserved figure of the novels.",
    type: "historical",
    firstAppearance: "Sharpe's Tiger",
    uncertain: false,
  },
  {
    name: "Tippu Sultan",
    rank: "Sultan of Mysore",
    nationality: "Indian (Mysorean)",
    role: "The real historical ruler of Mysore, known as the Tiger of Mysore. In Sharpe's Tiger he is the target of the British siege: a sophisticated, dangerous opponent who modernised his army with French advisers and iron-cased rockets. Cornwell portrays him closely to the historical record, including his well-attested practice of feeding prisoners to caged tigers.",
    fate: "Killed fighting at the northern gate of Seringapatam on 4 May 1799, as in history. His death ended the Kingdom of Mysore as an independent power.",
    books: ["Sharpe's Tiger"],
    tvFilms: [],
    novelVsTV: "Does not appear in TV adaptations.",
    type: "historical",
    firstAppearance: "Sharpe's Tiger",
    uncertain: false,
  },
  {
    name: "Captain Morris",
    rank: "Captain, 33rd Regiment of Foot",
    nationality: "English",
    role: "The indolent, drunken and venal captain of Sharpe's company, and Hakeswill's protector. Morris allows Hakeswill to run the company as he pleases in exchange for a share of the sergeant's corruption. An antagonist throughout Sharpe's time in the 33rd.",
    fate: "Survives Sharpe's Tiger. Reappears later in the India sequence.",
    books: ["Sharpe's Tiger", "Sharpe's Triumph", "Sharpe's Fortress"],
    tvFilms: [],
    novelVsTV: "Does not appear in TV adaptations.",
    type: "fictional",
    firstAppearance: "Sharpe's Tiger",
    uncertain: true,
  },
];
