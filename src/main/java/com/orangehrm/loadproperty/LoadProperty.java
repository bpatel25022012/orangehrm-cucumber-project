package com.orangehrm.loadproperty;

import com.orangehrm.basepage.BasePage;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;


public class LoadProperty extends BasePage {

    String projectPath = System.getProperty("user.dir");

    static Properties prop;
    static FileInputStream input;

    public String getProperty(String key){
        prop = new Properties();

        try {
            input = new FileInputStream(projectPath + "/src/test/java/com/orangehrm/resources/propertiesfile/config.properties");
            prop.load(input);
        } catch (IOException e) {
            e.printStackTrace();
        }
       return prop.getProperty(key);
    }

}
