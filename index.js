
require('dotenv').config(); 
const express = require('express');
const { createClient } = require('@supabase/supabase-js');


const app = express();
const PORT = 3000;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


app.use(express.json());


app.post('/products', async (req, res) => {
    const { name, price } = req.body; 

    const { data, error } = await supabase
        .from('products')
        .insert([{ name, price }])
        .select();

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(201).json(data);
});


app.get('/products', async (req, res) => {
    const { data, error } = await supabase
        .from('products')
        .select('*');

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json(data);
});


app.get('/products/:id', async (req, res) => {
    const { id } = req.params; 

    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id) 
        .single(); 

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    if (!data) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(data);
});


app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const { data, error } = await supabase
        .from('products')
        .update({ name, price })
        .eq('id', id)
        .select();

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    if (data.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(data);
});


app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;

    const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
