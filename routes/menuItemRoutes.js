const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');

// for menu item
router.post('/', async (req, res) => {
 try {
  const data = req.body;
  const newMenuItem = new MenuItem(data);
  const response = await newMenuItem.save();
  console.log('data saved');
  res.status(201).json(response);
 } catch (err) {
  console.log(err);
  res.status(500).json({ error: 'Failed to save data' });
 }
});

// get all menu items
router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
 }
});

// parameterized route to get menu items by taste
router.get('/:taste', async (req, res) => {
  try {
    const taste = req.params.taste;
    if(taste == 'spicy' || taste == 'sweet' || taste == 'sour') {
      const data = await MenuItem.find({ taste: taste });
      console.log('data fetched');
      res.status(200).json(data);
    } else {
      res.status(400).json({ error: 'Invalid taste' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// put request to update a menu item by id
router.put('/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedMenuItemData = req.body;
    const response = await MenuItem.findByIdAndUpdate(itemId, updatedMenuItemData, { new: true, runValidators: true });
    if(!response) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    console.log('data updated');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// delete request to delete a menu item by id
router.delete('/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const response = await MenuItem.findByIdAndDelete(itemId);
    if(!response) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    console.log('data deleted');
    res.status(200).json({ message: 'Menu item deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;