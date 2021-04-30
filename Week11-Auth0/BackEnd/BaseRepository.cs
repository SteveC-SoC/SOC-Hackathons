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

    private NpgsqlConnection SqlConnection()
    {
        var stringBuilder = new NpgsqlConnectionStringBuilder
        {
            // Host = _configuration["PGHOST"],
            // Database = _configuration["PGDATABASE"],
            // Username = _configuration["PGUSER"],
            // Port = Int32.Parse(_configuration["PGPORT"]),
            // Password = _configuration["PGPASSWORD"],
            // SslMode = SslMode.Require,
            // TrustServerCertificate = true

            Host = "ec2-18-233-83-165.compute-1.amazonaws.com",
            Database = "dfgufebstnd9b3",
            Username = "reaohtshpeuzdm",
            Port = 5432,
            Password = "dcf5b49317f2a28a115dbf0529219a27741f16e7a73a4f6a621e8c3b9fe3726f",
            SslMode = SslMode.Require,
            TrustServerCertificate = true
        };
        return new NpgsqlConnection(stringBuilder.ConnectionString);
    }


    public IDbConnection CreateConnection()
    {
        var conn = SqlConnection();
        conn.Open();
        return conn;
    }

}