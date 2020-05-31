package com.smit.server.service;

import com.smit.server.model.ExchangeRateToEUR;
import com.smit.server.repository.ExchangeRateToEURRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "exchangeRateToEURService")
public class ExchangeRateToEURServiceImpl implements ExchangeRateToEURService {

    @Autowired
    private ExchangeRateToEURRepository exchangeRateToEURRepository;

    @Override
    public void saveExchangeRate(ExchangeRateToEUR exchangeRate) {
        exchangeRateToEURRepository.save(exchangeRate);
    }

    @Override
    public ExchangeRateToEUR updateExchangeRate(ExchangeRateToEUR exchangeRate) {
        return exchangeRateToEURRepository.save(exchangeRate);
    }

    @Override
    public void deleteExchangeRate(Long id) {
        exchangeRateToEURRepository.deleteById(id);
    }

    @Override
    public ExchangeRateToEUR findExchangeRateById(Long id) {
        return exchangeRateToEURRepository.findById(id).orElse(null);
    }

    @Override
    public List<ExchangeRateToEUR> findAllExchangeRates() {
        return exchangeRateToEURRepository.findAll();
    }
}
