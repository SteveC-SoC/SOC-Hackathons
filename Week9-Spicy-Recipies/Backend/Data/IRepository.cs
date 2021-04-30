using System.Collections.Generic;
using System.Threading.Tasks;
public interface IRepository<T>
{
    Task<IEnumerable<T>> GetAll(); //called on page load

    T Get(long id);

    //Task<IEnumerable<T>> Get(int id);

    // Task<IEnumerable<T>> GetAllByMonth(string month); //on button clicks
    // Task<T> Insert(T item); //from the form
}