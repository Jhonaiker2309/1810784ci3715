import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("18-10784");
    });

    test('should return my name', () => {
        const query = "what's your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("Jhonaiker");
    });

    test('should return the largest number', () => {
        const query = "Which of the following numbers is the largest: 68, 65, 71?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("71");
    });

    test('should return the sum of two numbers', () => {
        const query = "What is 65 plus 28?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("93");
    });

    test('should return the largest number in another set', () => {
        const query = "Which of the following numbers is the largest: 56, 92, 57?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("92");
    });

    test('should return the sum of another two numbers', () => {
        const query = "What is 72 plus 15?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("87");
    });

    test('should return the product of two numbers', () => {
        const query = "What is 96 multiplied by 82?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("7872");
    });

    test('should return numbers that are both squares and cubes', () => {
        const query = "Which of the following numbers is both a square and a cube: 729, 1958, 1244, 783, 4587, 289, 4096?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("729, 4096");
    });
});