import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CountryA3List from "./CountryJSON";


function CountrySelect({handleChange}){
return (
    <>
  <Autocomplete
      id="combo-box-demo"
      options={CountryA3List}
      getOptionLabel={(option) => `${option["Country Name"]} (${option.ISO3})`}
      groupBy={(option) => (option["Continent Name"])}
      style={{ width: 300 }}
      onChange={(event,value) => handleChange(value)}
      renderInput={(params) => <TextField {...params} label="Country Search" variant="outlined" placeholder="Search for a Country" />}
    />
</>
)
}
export default CountrySelect;