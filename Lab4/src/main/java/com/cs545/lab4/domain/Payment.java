
package com.cs545.lab4.domain;

import jakarta.persistence.Embeddable;

@Embeddable
public class Payment {
    private String paydate;
    private double amount;
}
