import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOtherProps() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-error-label">西暦</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          label="Age"
          onChange={handleChange}
          renderValue={(value) => ` ${value}`}
        >
          <MenuItem value="">
            <em>西暦</em>
          </MenuItem>
          <MenuItem value={1922}>1922</MenuItem>
          <MenuItem value={1923}>1923</MenuItem>
          <MenuItem value={1924}>1924</MenuItem>
          <MenuItem value={1925}>1925</MenuItem>
          <MenuItem value={1926}>1926</MenuItem>
          <MenuItem value={1927}>1927</MenuItem>
          <MenuItem value={1928}>1928</MenuItem>
          <MenuItem value={1929}>1929</MenuItem>
          <MenuItem value={1930}>1930</MenuItem>
          <MenuItem value={1931}>1931</MenuItem>
          <MenuItem value={1932}>1932</MenuItem>
          <MenuItem value={1933}>1933</MenuItem>
          <MenuItem value={1934}>1934</MenuItem>
          <MenuItem value={1935}>1935</MenuItem>
          <MenuItem value={1936}>1936</MenuItem>
          <MenuItem value={1937}>1937</MenuItem>
          <MenuItem value={1938}>1938</MenuItem>
          <MenuItem value={1939}>1939</MenuItem>
          <MenuItem value={1940}>1940</MenuItem>
          <MenuItem value={1941}>1941</MenuItem>
          <MenuItem value={1942}>1942</MenuItem>
          <MenuItem value={1943}>1943</MenuItem>
          <MenuItem value={1944}>1944</MenuItem>
          <MenuItem value={1945}>1945</MenuItem>
          <MenuItem value={1946}>1946</MenuItem>
          <MenuItem value={1947}>1947</MenuItem>
          <MenuItem value={1948}>1948</MenuItem>
          <MenuItem value={1949}>1949</MenuItem>
          <MenuItem value={1950}>1950</MenuItem>
          <MenuItem value={1951}>1951</MenuItem>
          <MenuItem value={1952}>1952</MenuItem>
          <MenuItem value={1953}>1953</MenuItem>
          <MenuItem value={1954}>1954</MenuItem>
          <MenuItem value={1955}>1955</MenuItem>
          <MenuItem value={1956}>1956</MenuItem>
          <MenuItem value={1957}>1957</MenuItem>
          <MenuItem value={1958}>1958</MenuItem>
          <MenuItem value={1959}>1959</MenuItem>
          <MenuItem value={1960}>1960</MenuItem>
          <MenuItem value={1961}>1961</MenuItem>
          <MenuItem value={1962}>1962</MenuItem>
          <MenuItem value={1963}>1963</MenuItem>
          <MenuItem value={1964}>1964</MenuItem>
          <MenuItem value={1965}>1965</MenuItem>
          <MenuItem value={1966}>1966</MenuItem>
          <MenuItem value={1967}>1967</MenuItem>
          <MenuItem value={1968}>1968</MenuItem>
          <MenuItem value={1969}>1969</MenuItem>
          <MenuItem value={1970}>1970</MenuItem>
          <MenuItem value={1971}>1971</MenuItem>
          <MenuItem value={1972}>1972</MenuItem>
          <MenuItem value={1973}>1973</MenuItem>
          <MenuItem value={1974}>1974</MenuItem>
          <MenuItem value={1975}>1975</MenuItem>
          <MenuItem value={1976}>1976</MenuItem>
          <MenuItem value={1977}>1977</MenuItem>
          <MenuItem value={1978}>1978</MenuItem>
          <MenuItem value={1979}>1979</MenuItem>
          <MenuItem value={1980}>1980</MenuItem>
          <MenuItem value={1981}>1981</MenuItem>
          <MenuItem value={1982}>1982</MenuItem>
          <MenuItem value={1983}>1983</MenuItem>
          <MenuItem value={1984}>1984</MenuItem>
          <MenuItem value={1985}>1985</MenuItem>
          <MenuItem value={1986}>1986</MenuItem>
          <MenuItem value={1987}>1987</MenuItem>
          <MenuItem value={1988}>1988</MenuItem>
          <MenuItem value={1989}>1989</MenuItem>
          <MenuItem value={1990}>1990</MenuItem>
          <MenuItem value={1991}>1991</MenuItem>
          <MenuItem value={1992}>1992</MenuItem>
          <MenuItem value={1993}>1993</MenuItem>
          <MenuItem value={1994}>1994</MenuItem>
          <MenuItem value={1995}>1995</MenuItem>
          <MenuItem value={1996}>1996</MenuItem>
          <MenuItem value={1997}>1997</MenuItem>
          <MenuItem value={1998}>1998</MenuItem>
          <MenuItem value={1999}>1999</MenuItem>
          <MenuItem value={2000}>2000</MenuItem>
          <MenuItem value={2001}>2001</MenuItem>
          <MenuItem value={2002}>2002</MenuItem>
          <MenuItem value={2003}>2003</MenuItem>
          <MenuItem value={2004}>2004</MenuItem>
          <MenuItem value={2005}>2005</MenuItem>
          <MenuItem value={2006}>2006</MenuItem>
          <MenuItem value={2007}>2007</MenuItem>
          <MenuItem value={2008}>2008</MenuItem>
          <MenuItem value={2009}>2009</MenuItem>
          <MenuItem value={2010}>2010</MenuItem>
          <MenuItem value={2011}>2011</MenuItem>
          <MenuItem value={2012}>2012</MenuItem>
          <MenuItem value={2013}>2013</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
        </Select>
        <FormHelperText>年</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-error-label">月</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          label="Age"
          onChange={handleChange}
          renderValue={(value) => ` ${value}`}
        >
          <MenuItem value="">
            <em>月</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
        <FormHelperText>月</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">日</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>日</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={31}>31</MenuItem>
        </Select>
        <FormHelperText>日</FormHelperText>
      </FormControl>
    </div>
  );
}