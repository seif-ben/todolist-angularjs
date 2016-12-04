package com.services;

import java.util.Collection;

import org.springframework.stereotype.Service;

import jersey.repackaged.com.google.common.collect.Lists;

@Service
public class TodolistService {

	public Collection<String> findAll() {
		return Lists.newArrayList("Todo1", "Todo2", "Todo3", "Todo4");
	}

}
