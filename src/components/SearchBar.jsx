import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

import InputField from './InputField';
import SelectField from './SelectField';

const styles = makeStyles({
  form: {
    margin: 5
  },
  search: {
    top: 0,
    padding: 10,
    zIndex: 100,
    position: 'sticky',
    background: 'white',
  }
});

const SearchBar = (props) => {
  const {
    params,
    search,
    mediaTypes,
    handleChange,
    handleSearchChange,
  } = props;

  const classes = styles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.search}
    >
      <div className={classes.form}>
        <InputField
          id="s"
          label="Title"
          value={params.s}
          onEnter={search}
          autoFocus={true}
          onChange={handleChange}
          placeholder="Search..."
          startIcon={<SearchIcon />}
        />
      </div>
      <div className={classes.form}>
        <SelectField
          id="type"
          label="Type"
          labelWidth={37}
          value={params.type}
          dataList={mediaTypes}
          onChange={handleSearchChange}
        />
      </div>
      <div className={classes.form}>
        <InputField
          id="y"
          label="Year"
          maxLen={4}
          value={params.y}
          onEnter={search}
          onChange={handleChange}
        />
      </div>
    </Grid>
  );
}

export default SearchBar;