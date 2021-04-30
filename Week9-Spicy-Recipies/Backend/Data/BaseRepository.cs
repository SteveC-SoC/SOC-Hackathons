using System;
using System.Data;
using Microsoft.Extensions.Configuration;
using Npgsql;

public class BaseRepository
{
    IConfiguration _configuration;

    public BaseRepository(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    // Generate new connection based on connection string
    private NpgsqlConnection SqlConnection()
    {
        var stringBuilder = new NpgsqlConnectionStringBuilder
        {
            //when doing secrets, remember to add configuration
            Host = "ec2-176-34-222-188.eu-west-1.compute.amazonaws.com",
            Database = "ddb96jnelsq12j",
            Username = "xowpvzohbuljhy",
            //remember to add Int32.Parse() when adding secrets later
            Port = 5432,
            Password = "cdb7f670479568e65f12737b6462545bfdcc6f87f6e9b69c958d465430c64760",
            SslMode = SslMode.Require, // heroku specific setting https://stackoverflow.com/questions/37276821/connecting-to-heroku-postgres-database-with-asp-net
            TrustServerCertificate = true // heroku specific setting 
        };
        return new NpgsqlConnection(stringBuilder.ConnectionString);
    }

    // Open new connection and return it for use
    public IDbConnection CreateConnection()
    {
        var conn = SqlConnection();
        conn.Open();
        return conn;
    }

}