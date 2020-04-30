const express = require('express');

const app = express();

// Métodos HTTP:
// Get: Buscar informações no back-end
// Post: Criar informações no back-end
// Put/Patch : Alterar uma informação no back-end
// Delete: Deletar uma informação no back-end

app.get('/projects', (request, response) =>{
  return response.json({
     message: 'Hello World',
     name: 'Samuel Brito',
     status: 'Learning Nodejs',
     progress: '7%'
    });
}); 

app.post('/projects', (request, response) =>{
  return response.json({
    message: 'Hello World',
    name: 'Samuel Brito',
    status: 'Learning Nodejs',
    progress: '8%'
   });
});

app.put('/projects/:id', (request, response) =>{
  return response.json({
    message: 'Hello World',
    name: 'Samuel Brito',
    status: 'Learning Nodejs',
    progress: '9%',
    feature: 'App.get Add'
  })
});

app.delete('/projects/:id', (request, response) =>{
  return response.json({
    name: 'Samuel Brito',
    status: 'Learning Nodejs',
    progress: '9%',
    feature: 'App.get Add and Delete'
  })
})

app.listen(3333, () => {
  console.log('Status = 🟢')
});