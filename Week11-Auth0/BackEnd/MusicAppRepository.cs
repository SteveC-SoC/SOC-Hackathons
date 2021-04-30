using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Threading.Tasks;
public class MusicAppRepository : BaseRepository, IRepository<MusicApp>
{

    public MusicAppRepository(IConfiguration configuration) : base(configuration) { }
    public async Task<IEnumerable<MusicApp>> GetAll()
    {
        using var connection = CreateConnection();
        return await connection.QueryAsync<MusicApp>("SELECT * FROM MusicApp;");

    }

    public void Delete(long id)
    {
        using var connection = CreateConnection();
        connection.Execute("DELETE FROM MusicApp WHERE Id = @Id;", new { Id = id });
    }

    public async Task<MusicApp> Get(long id)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<MusicApp>("SELECT * FROM MusicApp WHERE Id = @Id;", new { Id = id });
    }

    public async Task<MusicApp> Update(MusicApp MusicApp)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<MusicApp>("UPDATE MusicApp SET Genre = @Genre, Song = @Song, Artist = @Artist, YouTubeLink = @YouTubeLink WHERE Id = @Id RETURNING *", MusicApp);
    }

    public async Task<MusicApp> Insert(MusicApp MusicApp)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<MusicApp>("INSERT INTO MusicApp (Genre, Song, Artist, YouTubeLink) VALUES (@Genre, @Song, @Artist, @YouTubeLink) RETURNING *;", MusicApp);
    }

    public async Task<IEnumerable<MusicApp>> Search(string query)
    {
        using var connection = CreateConnection();
        return await connection.QueryAsync<MusicApp>("SELECT * FROM MusicApp WHERE Genre ILIKE @Query OR Song ILIKE @Query OR Artist ILIKE @Query;", new { Query = $"%{query}%" });

    }


}