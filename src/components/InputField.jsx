import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const InputField = (props) => {
  const {
    id,
    label,
    value,
    maxLen,
    onChange,
    startIcon,
  } = props;

  const handleChange = (e) => {
    e.preventDefault();
    if (!e.target) return;
    onChange(id, e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!props.onEnter) return;
      props.onEnter(id, e.target.value);
    }
  }

  return (
    <TextField
      id={id}
      value={value}
      label={label}
      variant="outlined"
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      inputProps={{
        maxLength: maxLen ? maxLen : 128
      }}
      InputProps={{
        startAdornment: startIcon ? <InputAdornment position="start"><SearchIcon /></InputAdornment> : null,
      }}
    />
  );
}

export default InputField;