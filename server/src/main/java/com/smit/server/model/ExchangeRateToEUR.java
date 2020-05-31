package com.smit.server.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Entity
public class ExchangeRateToEUR {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal rate;

    @Enumerated(EnumType.STRING)
    private Currency currency;

    protected ExchangeRateToEUR() {
    }
}
