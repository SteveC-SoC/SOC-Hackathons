CREATE TABLE Recipes(
    Id SERIAL PRIMARY KEY,
    Title TEXT,
    Author TEXT,
    Method TEXT,
    TimeTaken INT

)

INSERT INTO Recipes (
    Title, Author, Method, TimeTaken
)
VALUES ('Egg', 'Stella Taylor', 'Sit on egg for 1.5 hours. When you feel it warm up, take hammer and smash on plate for EGG-celent breakfast', 2);
INSERT INTO Recipes (
    Title, Author, Method, TimeTaken
)
VALUES ('Chicken', 'Mother Nature', 'Get an egg and incubate it. Watch the chick hatch. Raise the chick as your own, rear it, feed it, nurse it when it gets ill. Love it. See it grow into a wonderful, plump chicken. Then, whatever you do, DO NOT KILL THE CHICKEN. The chicken is your friend. Add spice.', 200),('Cookies', 'Cookie Monster', 'Make cookies. Eat cookies, make cookies, eat cookies, make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat COOKIIIEEESSSSS', 24);


UPDATE Recipes SET Method = 'Make cookies. Eat cookies, make cookies, eat cookies, make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat COOKIIIEEESSSSS (add spice).' WHERE id = 4;