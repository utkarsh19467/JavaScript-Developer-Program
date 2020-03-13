import { newsTextValidator } from './checkNewsText'

test('News text length more than 10', () => {
    expect(newsTextValidator("Corporate tax cut positive but growth faces headwinds")).toBe(true);
});

test('News text length less than 10', () => {
    expect(newsTextValidator("shortnews")).toBe(false);
});