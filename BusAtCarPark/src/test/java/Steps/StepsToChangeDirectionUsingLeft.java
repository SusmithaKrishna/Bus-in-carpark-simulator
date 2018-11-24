package Steps;

import BaseUtil.BaseUtil;
import Pages.BusInCarPark;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;

public class StepsToChangeDirectionUsingLeft extends BaseUtil {
    private BaseUtil baseUtil;
    private  String faceAfterLeftClick, face, xAxis, yAxis, actualReport, expectedReport;
    public StepsToChangeDirectionUsingLeft(BaseUtil baseUtil){
        this.baseUtil = baseUtil;
    }


    @And("^place bus initially at ([^\\\"]*), ([^\\\"]*), ([^\\\"]*)$")
    public void placeBusInitiallyAtXAxisYAxisFace(String xAxis, String yAxis, String face){
        this.face = face;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        StepsToPlaceBus stepsToPlaceBus = new StepsToPlaceBus(baseUtil);
        stepsToPlaceBus.placeBusAtXAxisYAxisFace(xAxis,yAxis,face);
        stepsToPlaceBus.clickPlace();
    }

    @And("^click left$")
    public void clickLeft(){
        try {
            BusInCarPark busInCarPark = new BusInCarPark(baseUtil.Driver);
            busInCarPark.clickRotateToLeft();
            if (face.equalsIgnoreCase("North")) {
                faceAfterLeftClick = "west";
            } else if (face.equalsIgnoreCase("West")) {
                faceAfterLeftClick = "south";
            } else if (face.equalsIgnoreCase("East")) {
                faceAfterLeftClick = "north";
            } else if (face.equalsIgnoreCase("South")) {
                faceAfterLeftClick = "east";
            }
        }catch(NoSuchElementException nse){
            String message = "Element not found, Unexpected behaviour";
            Assert.assertTrue(message,false);
        }
    }

    @Then("^compare actual report with expected report after left click$")
    public void compareActualReportWithExpectedReportAfterLeftClick() {
        try {
            BusInCarPark busInCarPark = new BusInCarPark(baseUtil.Driver);
            busInCarPark.clickReportButton();
            expectedReport = "The bus is currently parked at X: " + xAxis + " and Y: " + yAxis + ", facing " + faceAfterLeftClick;
            actualReport = busInCarPark.reportResult.getText();
            Assert.assertEquals(expectedReport, actualReport);
        }catch(NoSuchElementException nse){
            String message = "Element not found, Unexpected behaviour";
            Assert.assertTrue(message,false);
        }
    }


}
