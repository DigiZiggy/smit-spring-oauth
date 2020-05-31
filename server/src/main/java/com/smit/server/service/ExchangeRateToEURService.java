package com.smit.server.service;

import com.smit.server.model.ExchangeRateToEUR;

import java.util.List;

public interface ExchangeRateToEURService {

    void saveExchangeRate(ExchangeRateToEUR exchangeRate);

    ExchangeRateToEUR updateExchangeRate(ExchangeRateToEUR exchangeRate);

    void deleteExchangeRate(Long Id);

    ExchangeRateToEUR findExchangeRateById(Long id);

    List<ExchangeRateToEUR> findAllExchangeRates();
}
