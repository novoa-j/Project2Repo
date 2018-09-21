package com.revature.salutem.models;

import javax.persistence.*;

//@Entity
//@Table
public class BodyLocations {
	//body location and sublocations both have a name and id, no need for another class
//	@Id
//	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="bodyLocationSequence")
//	@SequenceGenerator(name="bodyLocationSequence",allocationSize=1,sequenceName="SQ_LOC_PK")
//	@Column(name="LOCATION_ID")
	private int id;
//	@Column
	private String name;
	
	public BodyLocations() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BodyLocations(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BodyLocations other = (BodyLocations) obj;
		if (id != other.id)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "BodyLocations [id=" + id + ", name=" + name + "]";
	}
	
}