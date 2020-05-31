package com.smit.server.controller;

import com.smit.server.model.ExchangeRateToEUR;
import com.smit.server.service.ExchangeRateToEURService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:8089")
@RequestMapping(value = "/api/v1/exchange-rates-to-EUR")
public class ExchangeRateToEURController {

    @Autowired
    private ExchangeRateToEURService exchangeRateService;

    @GetMapping("/{id}")
    public ResponseEntity<?> findOne(@PathVariable Long id) {
        return new ResponseEntity<>(exchangeRateService.findExchangeRateById(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    void delete(@PathVariable Long id) {
        exchangeRateService.deleteExchangeRate(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public void create(@RequestBody ExchangeRateToEUR exchangeRate) {
        exchangeRateService.saveExchangeRate(exchangeRate);
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(exchangeRateService.findAllExchangeRates(), HttpStatus.OK);
    }

    @PutMapping("/edit/{id}")
    ExchangeRateToEUR update(@PathVariable Long id, @RequestBody ExchangeRateToEUR exchangeRateToEUR) {
        ExchangeRateToEUR exchangeRate = exchangeRateService.findExchangeRateById(id);
        exchangeRate.setRate(exchangeRateToEUR.getRate());
        exchangeRate.setCurrency(exchangeRateToEUR.getCurrency());
        return exchangeRateService.updateExchangeRate(exchangeRate);
    }
}
