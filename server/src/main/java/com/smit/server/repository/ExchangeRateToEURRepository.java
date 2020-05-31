package com.smit.server.repository;

import com.smit.server.model.ExchangeRateToEUR;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExchangeRateToEURRepository extends JpaRepository<ExchangeRateToEUR, Long> {
}
