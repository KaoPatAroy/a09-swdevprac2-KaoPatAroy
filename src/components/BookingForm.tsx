'use client'

import { TextField, Select, MenuItem, Button } from '@mui/material';
import DateReserve from '@/components/DateReserve';

export default function BookingForm() {
  return (
    <form className="w-[100%] max-w-[500px] flex flex-col space-y-6 bg-white p-10 rounded-lg shadow-md">
      <TextField variant="standard" name="Name-Lastname" label="Name-Lastname" />
      <TextField variant="standard" name="Contact-Number" label="Contact-Number" />
      <Select variant="standard" id="venue" name="venue" defaultValue="Bloom">
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>
      <DateReserve />
      <Button variant="contained" name="Book Venue" color="primary">
        Book Venue
      </Button>
    </form>
  );
}