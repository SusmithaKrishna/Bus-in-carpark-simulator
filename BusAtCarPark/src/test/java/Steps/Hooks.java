package Steps;
import BaseUtil.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
public class Hooks extends BaseUtil{
    private BaseUtil baseUtil;
    private String driver,driver_location,url;
    public Hooks(BaseUtil baseUtil) {
        this.baseUtil = baseUtil;
        Properties properties = new Properties();
        String propertiesFileName = "config.properties";
        FileInputStream inputStream = null;
        try {
            inputStream = new FileInputStream("C:\\Users\\Saikrishna\\workspace\\BusAtCarPark\\config.properties");
            properties.load(inputStream);
            this.driver = properties.getProperty("Driver");
            this.driver_location = properties.getProperty("driver_location");
            this.url = properties.getProperty("URL");
        } catch (FileNotFoundException e1) {
            e1.printStackTrace();
        } catch (IOException e1) {
            e1.printStackTrace();
        }
    }

    @Before
    public void InitializeTest() {
        if (driver.equalsIgnoreCase("chrome")){
            System.setProperty("webdriver.chrome.driver", driver_location);
            baseUtil.Driver = new ChromeDriver();
            baseUtil.Driver.get(url);
        }
        else if(driver.equalsIgnoreCase("FireFox")){
            System.setProperty("webdriver.gecko.driver", driver_location);
            baseUtil.Driver = new FirefoxDriver();
            baseUtil.Driver.get(url);
        }
        else {
            System.setProperty("webdriver.ie.driver", driver_location);
            baseUtil.Driver = new InternetExplorerDriver();
            baseUtil.Driver.get(url);
        }

    }


    @After
    public void TearDownTest(Scenario scenario) {
        baseUtil.Driver.close();
    }

}
