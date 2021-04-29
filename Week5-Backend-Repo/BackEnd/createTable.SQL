CREATE TABLE Languages (
    Id SERIAL PRIMARY KEY,
    Language TEXT,
    Definition TEXT,
    CodeExample TEXT,
    LinkResource TEXT,
    BlobExpert TEXT
)


INSERT INTO
    Languages (Language, Definition, CodeExample, LinkResource,BlobExpert )
VALUES
    ('Console.WriteLine', 'used to print', 'Console.WriteLine("Hello World")', 'More information here', 'Steve');