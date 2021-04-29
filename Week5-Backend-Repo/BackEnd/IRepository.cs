using System.Collections.Generic; 
using System.Threading.Tasks; 

//building an interface
public interface IRepository<T>
{
    Task<IEnumerable<T>> GetAll();
    //void Delete();
   // T Get();
    //T Update();
    //T Insert(T t);
}

