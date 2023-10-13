'use strict';

function preventScreenReaderFromReadingElement(element) {
    element.setAttribute('aria-hidden', 'true');
}

const classesForElementsToNotReadAloud = [
    // New Reddit
    '_1rZYMD_4xY3gRcSS3p8ODO', // Net Upvotes
    '_374Hkkigy4E4srsI2WktEd', // Reply, Give Award, etc. row
    '_1zxdGxj6UKKqJMibObCbeA', // Achievements Count (TODO: Not working for some reason)

    // Old Reddit
    'score', // permalink, embed, save, report, reply
];

classesForElementsToNotReadAloud.forEach(function (className) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        preventScreenReaderFromReadingElement(elements[i]);
    }
})

// Old Reddit
const buttons = document.getElementsByClassName('buttons');
for (let i = 0; i < buttons.length; i++) {
    const links = buttons[i].getElementsByTagName('a');
    for (let j = 0; j < links.length; j++) {
        preventScreenReaderFromReadingElement(links[j]);
    }
}