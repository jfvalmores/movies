import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  root: {
    minWidth: 150
  }
});

const SelectField = (props) => {
  const {
    id,
    label,
    value,
    onChange,
    dataList,
    labelWidth,
  } = props;

  const classes = styles();

  const handleChange = (e) => {
    e.preventDefault();
    if (!e.target) return;
    onChange(id, e.target.value);
  }

  return (
    <FormControl variant="outlined">
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        id={id}
        value={value}
        labelWidth={labelWidth}
        labelId={`${id}-label`}
        variant="outlined"
        className={classes.root}
        onChange={handleChange}
      >
        {dataList.map((item, idx) => (
          <MenuItem
            key={idx}
            value={item.data}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;