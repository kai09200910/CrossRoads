import React, { useState } from 'react';
import {
  Box,
  Switch,
  FormControlLabel,
  MenuItem,
  Select,
  Grid,
  TextField,
  Stack,
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';
import TagsInput from '../common/tagsInput';
const DocumentsTab = () => {
  function handleSelecetedTags(items) {
    console.log(items);
  }

  return (
    <>
      <Box className='documents-tab'>Documents Tab content</Box>
    </>
  );
};

export default DocumentsTab;
