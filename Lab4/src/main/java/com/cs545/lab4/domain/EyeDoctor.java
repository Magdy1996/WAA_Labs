package com.cs545.lab4.domain;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("Eye Doctor")
public class EyeDoctor extends Doctor {

}
