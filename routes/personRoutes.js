const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

// for person
router.post('/', async (req, res) => {
 try {
  const data = req.body;
  const newPerson = new Person(data);
  const response = await newPerson.save();
  console.log('data saved');
  res.status(201).json(response);
 } catch (err) {
  console.log(err);
  res.status(500).json({ error: 'Failed to save data' });
 }
});

// get all persons
router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
 }
});

// parameterized route to get persons by work type
router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'waiter' || workType == 'manager') {
      const data = await Person.find({ work: workType });
      console.log('data fetched');
      res.status(200).json(data);
    } else {
      res.status(400).json({ error: 'Invalid work type' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// put request to update a person by id
router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, { new: true, runValidators: true });
    if(!response) {
      return res.status(404).json({ error: 'Person not found' });
    }
    console.log('data updated');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// delete request to delete a person by id
router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if(!response) {
      return res.status(404).json({ error: 'Person not found' });
    }
    console.log('data deleted');
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
