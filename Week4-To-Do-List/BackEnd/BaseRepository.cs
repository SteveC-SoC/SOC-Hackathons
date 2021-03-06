
using System.Data;
using Npgsql;


public class BaseRepository
{
    // Generate new connection based on connection string
    private NpgsqlConnection SqlConnection()
    {
        // This builds a connection string from our separate credentials
        // TODO: add your connection settings
        var stringBuilder = new NpgsqlConnectionStringBuilder
        {
            Host = "ec2-52-214-38-135.eu-west-1.compute.amazonaws.com", // e.g. ec2-1-2-3-4@eu-west-1.compute.amazonaws.com
            Database = "d6q4ri6fgna2th", // e.g. ksdjfhsafnfas
            Username = "seaqreireyvmyq", // e.g. lksfhdslkfsdflk
            Password = "e9446cc2e7ec143c3e2c99368a27a63b890c49dcff48c876759c74e75818b513",// e.g KJZDldfj34567dslkfjsdlfksdjflsdkfjsdlkfjsdl34567fkjdsgDRTYUI
            Port = 5432, // e.g 5432
            SslMode = Npgsql.SslMode.Require, // Heroku Specific Setting
            TrustServerCertificate = true // Heroku Specific Setting
        };

        return new NpgsqlConnection(stringBuilder.ConnectionString);
    }

    // Open new connection and return it for use
    public IDbConnection CreateConnection()
    {
        var connection = SqlConnection();
        connection.Open();
        return connection;
    }

}