const prompts = [
    {
        key: 0,
        title: 'Prompt One - Impulse Control',
        description: ' Two people who are the smart, sensible voices of reason until they are together. Write about a situation where they had zero impulse control!'
    },
    {  
        key: 1,
        title: 'Prompt Two - Hunger: A Memoir of (My) Body, by Roxane Grey',
        description: ' I buried the girl I had been because she ran into all kinds of trouble. I tried to erase every memory of her, but she is still there, somewhere. She is still small and scared and ashamed, and perhaps I am writing my way back to her, trying to tell her everything she needs to hear.'
    },
    {
        key: 2,
        title: 'Prompt Three - Sustainable Necromancy',
        description: ' In the interest of sustainable recycling, it is important to learn both blood magic and necromancy to make proper use of a recently deceased body.'
    },
    {
        key: 3,
        title: 'Prompt Four - Demonic Sympathy',
        description: ' Why does the demon never have sympathy for the sacrifice? Surely, a team up between the ones held against their will would be more fruitful...'
    },
    {
        key: 4,
        title: 'Prompt Five - Liquid Limits of the Human Body',
        description: ' Cold Water = 4C, \n Diving Depth = 282ft \n Dehydration = 7 days'
    },
    {
        key: 5,
        title: 'Prompt Six - Tumblr Poem by zackshah',
        description: ' Skin be steel, flesh be stone. \n Nerves be strong, as gem or bone. \n Let pain be but kisses, or breaths of air. \n Magic be my armour, for I will not bear \n Neither the sufferings of the dead, or the agonies of Hell. \n Runes of blood, now serve me well.'
    },
    {
        key: 6,
        title: 'Prompt Seven - Vampire Snow White',
        description: ' Funny how the stereotype for a vampire is "lips as red as rose, hair as black as ebony, and skin as white as snow"...'
    },
    {
        key: 7, 
        title: 'Prompt Eight - Plot Twist by sstrangeprompts',
        description: ' Due to the horrible crimes you have committed against the nation, you have been sent to court, and after a quick trial, sentenced to death. \n Just as you\'re being taken away, the doors to the courtroom open wide and in storms a person frantically yelling that they are in possession of evidence that will prove your innocence. The person looks at you and discreetly winds. \n This sudden twist is strange for two specific reasons: \n 1) You have definitely committed all those crimes; \n 2) You don\'t know who the fuck this person is.'
    },
    {
        key: 8,
        title: 'Prompt Nine - Let There Be Dragons!',
        description: ' You\'re a powerful dragon that lived next to a small kingdom. For centuries you ignored humanity and lived alone in a cave, and the humans also avoided you. As the kingdom fell to invaders, a dying soldier approaches you with the infant princess, begging you to take care of her.'
    },
    {
        key: 9,
        title: 'Prompt Ten - Multiple Souls by little-miss-lalonde and mama-hanii',
        description: ' little-miss-lalonde: "What if there are actually multiple souls in your body but you\'re the most powerful one so you have control over your body and the voices you hear in your head are just the weaker souls talking to you." \n mama-hanii: "and maybe people with schizophrenia don\'t have an assertive soul so all of the souls are fighting to take over.'
    },
    {
        key: 10,
        title: 'Prompt Eleven - Cohabiting in Space',
        description: ' As an alien supervisor looking after human crewmates, you find their behaviours odd. What is with those tubes of white plant paste for? And, why do they form pack bonds so quickly? It would really be safer if they stopped trying to smuggle "cute" animals aboard the ship!'
    },
    {
        key: 11,
        title: 'Prompt Twelve - Captain America Fanfiction Quote (Apparently!)',
        description: ' We deserve a soft epilogue, my love.'
    },
    {
        key: 12,
        title: 'Prompt Thirteen - Introvert\'s Seasonal Retreat',
        description: ' I am such an Autumn person. Give me a quiet, cozy spot with a view of the changing trees on a crisp, late September day, a warm drink, and a good book and I will be in all my glory.'
    },
    {
        key: 13,
        title: 'Prompt Fourteen - Gays in Power',
        description: ' Logically, if a gay couple were in power, they would not have the same title. In a fantasy setting, you can have more fun with this... So, go ahead!'
    },
    {
        key: 14,
        title: 'Prompt Fifteen - Material Tattoos by Fillbuster Frog',
        description: ' Usually of swords and other weapons, material tattoos function much like enchanted bags and storage dimensions. They require a small amount of energy to be expelled from the skin of their owner. Much of the appeal is in the ease of concelaing a weapon which cannot be removed from their person with ease. This can also be used to keep valuable family-heirlooms on hand and safe, or to make sure you never loose your house keys. \n If lost, the material will return to your skin within 24 hours. These tattoos cannot make copies and they must be to scale with the object.'
    },
    {
        key: 15,
        title: 'Prompt Sixteen - Anomaly',
        description: ' While waiting for a friend in a coffee shop, a strange thought crosses your mind: "What if I\'m the only one who can\'t read minds?" A glass shatters and when it suddenly becomes quiet, you turn around. Everyone is staring at you with a terrified look in their eyes.'
    },
    {
        key: 16,
        title: 'Prompt Seventeen - Refusal of the Call',
        description: ' Everything is lining up for you to be the main character of a quest... But you\'re pretty content with life. So, what will you do to avoid the call?'
    },
    {
        key: 17,
        title: 'Prompt Eighteen - Was it worth it?',
        description: ' A shop opens up where you can rent supernatural powers and goods in exchange for abstract things. These payments seem trivial until you come across someone who knows you, but you don\'t know them.'
    },
    {
        key: 18,
        title: 'Prompt Nineteen - Pyrrhic Victory',
        description: ' A Pyrrhic Victory is a victory that inflicts such a devastating toll on the victor that it is taramount to defeat. Someone who wins a Pyrrhic Victory has been victorious in some way. However, the heavy toll negates any sense of achievement or profit.'
    },
    {
        key: 19,
        title: 'Prompt Twenty - It\'s a Little Late For That, Isn\'t It? by danielarodri98',
        description: ' "You know what would be terrifying?" She asked as they stared at the starry black night sky. \n "What?" he questioned, feeling the gentle breeze whisk through his hair. \n "To be immortal." She sighed. \n He smiled, "It\'s a little late for that, isn\'t it?"'
    },
    {
        key: 20,
        title: 'Prompt Twenty-One - Guilty',
        description: ' They hadn\'t wanted this. Of course, they\'d wanted the hero to stop fighting them... Wanted them broken, despondent, but not like this. This person staring blankly at the walls, terrified of their own power, wasn\'t what htey wanted. \n "Darling, you\'re beautiful. You don\'t need to be scared with me, I promise you that. Look - try and attack me and I promise I can stop you. You\'re safe with me... You couldn\'t hurt me if you tried, I\'m just like you."'
    },
    {
        key: 21,
        title: 'Prompt Twenty-Two - An Understanding',
        description: ' "You killed someone. Do you really think they\'re ever going to want you back?" They looked up, desperate, shattered. "I\'ll always want you, even if they don\'t", I whispered. "I understand what it\'s like. It was an accident, wasn\'t it?"'
    },
    {
        key: 22,
        title: 'Prompt Twenty-Three - Athazagoraphobia',
        description: ' noun. The fear of forgetting, being forgotten or ignored, or being replaced.'
    },
    {
        key: 23,
        title: 'Prompt Twenty-Four - Nefelibata',
        description: ' "cloud walker"; one who lives in the clouds of their own imagination or dreams, or one who does not obey the conventions of society, literature, ot art.'
    },
    {
        key: 24,
        title: 'Prompt Twenty-Five - I need Help... by @theories-fans-andwombats',
        description: ' "I need help," the Hero said, breathing hard as they kneeled in the mud. The Villain crouched down before them, \n "Why is that?" \n "Because there\'s someone worse out there I need to deal with. Contrary to what you might think, you aren\'t the worse person I\'ve had to face. And I..." the Hero trailed off, glancing away. \n "And you what?" \n "I-i-i..." \n The Hero made a choking sound, their shoulders slumping forward. Crying, the Villain realised the Hero was crying. They leaned closer, taking a good look at their face. The cuts on the forehead and cheek seemed shallow enough, but now that they looked, the Hero\'s eyes were a pale, cloudy colour and seemed unfocused. The Villain felt their blood run cold. \n "They blinded you?" They whispered. The Hero nodded.'
    },
    {
        key: 25,
        title: 'Prompt Twenty-Six - Survivor',
        description: ' This was never about winning.\n It was about survival.'
    },
    {
        key: 26,
        title: 'Prompt Twenty-Seven - Ghosts',
        description: ' His blade pressed against my throat. "Go ahead. Kill me. Then I\'ll just be another ghost to haunt you.'
    },
    {
        key: 27,
        title: 'Prompt Twenty-Eight - What heights will you reach?',
        description: ' To storm and ash, or stars and crows?'
    },
    {
        key: 28,
        title: 'Prompt Twenty-Nine - Reincarnation',
        description: ' She kissed her cheek as the world around them burned. As blood bubbled from her stomach, she held a trembling hand to her lovers cheek and whispered, "See you in the next life, my love." Before turning her attention to the one who had destroyed the world, promising, "See you soon."'
    },
    {
        key: 29,
        title: 'Prompt Thirty - Shadow',
        description: ' There is a reason I am afriad of my own shadow. You should be afraid of it too.'
    },
    {
        key: 30,
        title: 'Prompt Thirty-One - New Responsibility',
        description: ' He turned from his kingdom, the two small lives in his arms were the only things which mattered now.'
    },
    {
        key: 31,
        title: 'Prompt Thirty-Two - Power',
        description: '"Kings and Gods have bowed to me, what makes you think you can refuse for long?" \n "I am a Queen, darling. Those Kings and Gods bowed to me first. You should take notes."'
    },
    {
        key: 32,
        title: 'Prompt Thirty-Three - Let there be Dragons!',
        description: 'I had always wanted a pet. The fact that it was an invisible dragon didn\'t hurt either.'
    },
    {
        key: 33,
        title: 'Prompt Thirty-Four - Beg',
        description: 'I will deny you death until you beg me for it.'
    },
    {
        key: 34,
        title: 'Prompt Thirty-Five - Harsh Payment',
        description: ' This was a different type of magic, a darker kind. As the whorls of darkness whipped through the air, the painful-looking black markings on the stranger\'s body suddenly made sense.'
    },
    {
        key: 35,
        title: 'Prompt Thirty-Six - Shock',
        description: ' "It\'s strange how I\'d never noticed her before. I mean, I\'d seen her, but I\'d never really paid attention... Now, it seems like I can\'t look at anything else. Not after what she told me."'
    },
    {
        key: 36,
        title: 'Prompt Thirty-Seven - Accidental Summoning',
        description: ' In a realm without the supernatural or magical, you have accidentally summoned a demon. As neither of you know the terms of their summoning, they cannot be controlled or returned.'
    },
    {
        key: 37,
        title: 'Prompt Thirty-Eight - Horror Challenge',
        description: ' Create a horror story that doesn\'t involve the paranormal, supernatural, aliens or psychopaths.'
    },
    {
        key: 38,
        title: 'Prompt Thirty-Nine - Fondness for Trees is Subjective',
        description: ' People are so fond of looking at the forest, that they neglect to look at the single tree. Consider the first tree, not the one that lastest the longest. The one that was cut down in a bid to monetise nature. What is its story and what have we lost?'
    },
    {
        key: 39,
        title: 'Prompt Fourty - Medusa',
        description: ' Medusa the warrior. Medusa the survivor. Medusa the protector. \n Not Medusa the Monster. Not Medusa the Victim. Not Medusa the Attacker.'
    },
    {
        key: 40,
        title: 'Prompt Fourty-One - Possession',
        description: ' Write something for the people we miss, even though they still possess out heart and mind.'
    },
    {
        key: 41,
        title: 'Prompt Fourty-Two - Jealous Flowers',
        description: 'Sing a song, heard the tulip. \n So it sang a melody, \n Telling the beauty of Spring, \n Shadowed in its jealousy of the Daffodil.'
    },
    {
        key: 42,
        title: 'Prompt Fourty-Three - Corruption',
        description: ' She scraped a star from her crown to her iris, blinding herself with the wonders of the universe. It stole her voice with its all encompassing vacuum as she became corrupted by an unnatural selfishness for what she now knew.'
    },
    {
        key: 43,
        title: 'Prompt Fourty-Four - Hatred for the Night Sky',
        description: ' For so long, the night sky has inspired beautiful words. Describe it as horrendously as possible. For example, a star could be a pimple waiting to burst.'
    },
    {
        key: 44,
        title: 'Prompt Fourty-Five - Plucked Strings',
        description: ' ...This music has no human hands.'
    },
    {
        key: 45,
        title: 'Prompt Fourty-Six - Protest for Yourself',
        description: ' To the people who limit me creatively... genuinely and sincerely, fuck you.'
    },
    {
        key: 46,
        title: 'Prompt Fourty-Seven - Must be a Tuesday',
        description: ' You looked up into the sky and saw a dragon flying across it. As they left your sight, you thought to yourself, \'It must be Tuesday.\''
    },
    {
        key: 47,
        title: 'Prompt Fourty-Eight - Take a Hint, Romeo!',
        description: ' Juliet waits on the landing by oil-lamp, waiting for her Romeo to arrive. As he prostates himself below her window, she pours the burning oil onto him, setting his eyes alight. Finally, she is free.'
    },
    {
        key: 48,
        title: 'Prompt Fourty-Nine - You\'ve lost.',
        description: ' As the chosen vessels met for their last ceremony, all were ready to sacrifice their lives for the better of their country. However, as they were being drained they realised all was not what it seemed. Something was emerging and the priest looked satisfied.'
    },
    {
        key: 49,
        title: 'Prompt Fifty - After the Battle is Won',
        description: ' The hero has returned triumphant. Peace has spread, reaching all corners of the land. But it missed the hero. and they are fracturing.'
    }
]

module.exports = {prompts}