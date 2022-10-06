package com.cinemag8.cinema.entity;

import javax.persistence.*;

@Entity
public class client {

    @Id
    @Column(nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;




}
