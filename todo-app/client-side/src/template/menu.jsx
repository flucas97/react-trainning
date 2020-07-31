import React from 'react'

export default _ => 
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="/"> <strong>TODO App</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/todos">Tarefas</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/about">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>