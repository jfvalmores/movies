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
    autoFocus,
    placeholder,
  } = props;

  const maxLength = maxLen ? maxLen : 128;
  const startAdornment = startIcon ? <InputAdornment position="start"><SearchIcon /></InputAdornment> : null;

  const handleChange = (e) => {
    e.preventDefault();
    if (!e.target) return;
    onChange(id, e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!props.onEnter) return;
      props.onEnter();
    }
  }

  return (
    <TextField
      id={id}
      value={value}
      label={label}
      variant="outlined"
      autoFocus={autoFocus}
      onChange={handleChange}
      placeholder={placeholder}
      onKeyPress={handleKeyPress}
      inputProps={{
        maxLength
      }}
      InputProps={{
        startAdornment,
      }}
    />
  );
}

export default InputField;