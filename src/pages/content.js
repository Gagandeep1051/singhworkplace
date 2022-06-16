import { Link } from "react-router-dom";

const articles = [
    // {
    //     name: 'John-first',
    //     title: 'John-first',
    //     author: '',
    //     content: [
    //         'A paragraph (from Ancient Greek παράγραφος (parágraphos) ' +
    //         'to write beside) is a self-contained unit of discourse ' +
    //         'in writing dealing with a particular point or idea. A ' +
    //         'paragraph consists of one or more sentences.[1] Though' +
    //         ' not required by the syntax of any language, paragraphs ' +
    //         'are usually an expected part of formal writing, used to ' +
    //         'organize longer prose.[citation needed]'
    //     ],
    //     ReadAricle: [ ],
    //     Link: [ ],
    // },

    // {
    //     name: 'Tom-second',
    //     title: 'Tom-second',
    //     author: '',
    //     content: [
    //         'Paragraphs are the building blocks of papers. Many students ' +
    //         'define paragraphs in terms of length: a paragraph is a group ' +
    //         'of at least five sentences, a paragraph is half a page long, ' +
    //         'etc. In reality, though, the unity and coherence of ideas among ' +
    //         'sentences is what constitutes a paragraph. A paragraph is defined ' +
    //         'as “a group of sentences or a single sentence that forms a unit” ' +
    //         '(Lunsford and Connors 116). Length and appearance do not determine' +
    //         ' whether a section in a paper is a paragraph. For instance, in some' +
    //         ' styles of writing, particularly journalistic styles, a paragraph ' +
    //         'can be just one sentence long. Ultimately, a paragraph is a sentence ' +
    //         'or group of sentences that support one main idea. In this handout, we ' +
    //         'will refer to this as the “controlling idea,” because it controls what ' +
    //         'happens in the rest of the paragraph.'
    //     ],
    //     ReadAricle: [ ],
    //     Link: [ ],
    // },
    // {
    //     name: 'Gary-third',
    //     title: 'Gary-third',
    //     author: '',
    //     content: [
    //         'Paragraphs are the building blocks of papers. Many students ' +
    //         'define paragraphs in terms of length: a paragraph is a group ' +
    //         'of at least five sentences, a paragraph is half a page long, ' +
    //         'etc. In reality, though, the unity and coherence of ideas among ' +
    //         'sentences is what constitutes a paragraph. A paragraph is defined ' +
    //         'as “a group of sentences or a single sentence that forms a unit” ' +
    //         '(Lunsford and Connors 116). Length and appearance do not determine' +
    //         ' whether a section in a paper is a paragraph. For instance, in some' +
    //         ' styles of writing, particularly journalistic styles, a paragraph ' +
    //         'can be just one sentence long. Ultimately, a paragraph is a sentence ' +
    //         'or group of sentences that support one main idea. In this handout, we ' +
    //         'will refer to this as the “controlling idea,” because it controls what ' +
    //         'happens in the rest of the paragraph.'
    //     ],
    //     ReadAricle: [ ],
    //     Link: [ ],
    // },

    // {
    //     name: 'manu-fourth',
    //     title: 'manu-fourth',
    //     author: '',
    //     content: [
    //         'Paragraphs are the building blocks of papers. Many students ' +
    //         'define paragraphs in terms of length: a paragraph is a group ' +
    //         'of at least five sentences, a paragraph is half a page long, ' +
    //         'etc. In reality, though, the unity and coherence of ideas among ' +
    //         'sentences is what constitutes a paragraph. A paragraph is defined ' +
    //         'as “a group of sentences or a single sentence that forms a unit” ' +
    //         '(Lunsford and Connors 116). Length and appearance do not determine' +
    //         ' whether a section in a paper is a paragraph. For instance, in some' +
    //         ' styles of writing, particularly journalistic styles, a paragraph ' +
    //         'can be just one sentence long. Ultimately, a paragraph is a sentence ' +
    //         'or group of sentences that support one main idea. In this handout, we ' +
    //         'will refer to this as the “controlling idea,” because it controls what ' +
    //         'happens in the rest of the paragraph.'
    //     ],
    //     ReadAricle: [ ],
    //     Link: [ ],
    // },

    {
        name: 'The-Other-Wife',
        title: '"The Other Wife"',
        author: 'By Colette',
        content: [
            ' Marc and Alice are out for supper when he sees his ex-wife seated nearby. ' +
            ' They talk about his ex and their new happiness...'
        ],
        ReadAricle: [
            ' “TABLE FOR TWO? This way, Monsieur, Madame, there is still a table next to the ' + 
            ' window, if Madame and Monsieur would like a view of the bay.”  ' + 
            '  Alice followed the maitre d’. ' +
            ' “Oh, yes. Come on, Marc, it’ll be like having lunch on a boat on the water... '
        ],
        Link: <a href="https://www.101bananas.com/library2/otherwife.html">Read Article</a>,

    }, 

    {
        name: 'A-Dead-Woman-Secret',
        title: '"A Dead Woman Secret"',
        author: 'By Guy de Maupassant',
        content: [
            ' A dead woman’s adult children, a judge and a nun, sit vigil over her body.' +
            ' They decide to read some of her old letters, which reveals an old secret...'
        ],
        ReadAricle: [
            'The woman had died without pain, quietly, as a woman should whose life had been' +
            ' blameless. Now she was resting in her bed, lying on her back, her eyes closed, ' +
            ' her features calm, her long white hair carefully arranged as though she had done' +
            ' it up ten minutes before dying. The whole pale countenance of the dead woman was' +
            ' so collected, so calm, so resigned that one could feel what a sweet soul had lived' +
            ' in that body, what a quiet existence this old soul had led, how easy and pure the ' + 
            ' death of this parent had been. '
        ],
        Link: <a href="https://www.gutenberg.org/files/3090/3090-h/3090-h.htm#2H_4_0190">Read Article</a>,

    },

    {
        name: 'Riddle-Match-game',
        title: 'Riddle: Match game',
        author:[ ] ,
        content: [
            'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and' +
            'slow when I’m fat. The wind is my enemy. '
        ],
        ReadAricle: [ ],
        Link: <a href="https://www.rd.com/list/challenging-riddles/#:~:text=IMAGES%2C%20RD.COM-,Riddle%3A%20Match%20game,-You%20measure%20my" target="_blank"> Answer</a>,

    },

    {
        name: 'Riddle-Cruising-along',
        title: 'Riddle: Cruising along',
        author:[ ] ,
        content: [
            'You see a boat filled with people. It has not sunk, but when you look again you don’t' +
            ' see a single person on the boat. Why? ' 
        ],
        ReadAricle: [  ],
        Link:<a href="https://www.rd.com/list/challenging-riddles/#:~:text=Riddle%3A%20Cruising%20along" target="_blank"> Answer</a>,

    },
    
]
export default articles;