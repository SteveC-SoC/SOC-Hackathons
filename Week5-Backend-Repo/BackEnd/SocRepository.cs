using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Threading.Tasks; 

public class SocRepository : BaseRepository, IRepository<Soc> //extention of Base
{
      public SocRepository(IConfiguration configuration) : base(configuration) { }
    public async Task<IEnumerable<Soc>> GetAll()//Task<IEnumerable<Soc>> GetAll()
    {
        using var connection = CreateConnection();
        IEnumerable<Soc> Soc = await connection.QueryAsync<Soc>("SELECT * FROM Languages");
        return Soc;
    }

}

