using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Threading.Tasks;

public class RecipeRepository : BaseRepository, IRepository<Recipe>
{
    public RecipeRepository(IConfiguration configuration) : base(configuration) { }
    public async Task<IEnumerable<Recipe>> GetAll()
    {
        using var connection = CreateConnection();

        return await connection.QueryAsync<Recipe>("SELECT * FROM Recipes ORDER BY id;");
    }

    public Recipe Get(long id)
    {
        using var connection = CreateConnection();
        return connection.QuerySingle<Recipe>("SELECT * FROM Recipes WHERE Id = @Id;", new { Id = id });
    }

}