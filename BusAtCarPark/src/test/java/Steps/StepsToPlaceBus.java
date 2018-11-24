package Steps;

import BaseUtil.BaseUtil;
import Pages.BusInCarPark;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;

public class StepsToPlaceBus extends BaseUtil {

    private BaseUtil baseUtil;
    public StepsToPlaceBus(BaseUtil baseUtil){
        this.baseUtil = baseUtil;
    }
    private String xAxis, yAxis, face;

    @Given("^load bus in a car park page$")
    public void loadBusInACarParkPage() {
        baseUtil.Driver.navigate().to("https://accordo-it.github.io/carpark/");
    }

    @And("^place bus at ([^\\\"]*), ([^\\\"]*), ([^\\\"]*)$")
    public void placeBusAtXAxisYAxisFace(String xAxis, String yAxis, String face){
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.face = face;
        BusInCarPark busInCarPark = new BusInCarPark(baseUtil.Driver);
        busInCarPark.defineBusPositipon(xAxis, yAxis, face);
    }

    @And("^click place$")
    public void clickPlace() {
        try {
            BusInCarPark busInCarPark = new BusInCarPark(baseUtil.Driver);
            busInCarPark.clickPlaceButton();
        }catch(NoSuchElementException nse){
            String message = "Element not found, Unexpected behaviour";
            Assert.assertTrue(message,false);
        }
    }

    @Then("^compare actual report with expected result$")
    public void compareActualReportWithExpectedResult() {
        try {
            BusInCarPark busInCarPark = new BusInCarPark(baseUtil.Driver);
            busInCarPark.clickReportButton();
            String actualResult = busInCarPark.reportResult.getText();
            String expectedResult = "The bus is currently parked at X: " + xAxis + " and Y: " + yAxis + ", facing " + face;
            Assert.assertEquals(expectedResult, actualResult);
            System.out.println(expectedResult);
        }catch(NoSuchElementException nse){
            String message = "Element not found, Unexpected behaviour";
            Assert.assertTrue(message,false);
        }
    }
}
