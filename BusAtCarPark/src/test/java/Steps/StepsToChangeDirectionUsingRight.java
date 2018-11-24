package Steps;

import BaseUtil.BaseUtil;
import Pages.BusInCarPark;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;

public class StepsToChangeDirectionUsingRight extends BaseUtil {
    private  String faceAfterRightClick, face, xAxis, yAxis, actualReport, expectedReport;
    BaseUtil baseUtil;
    public StepsToChangeDirectionUsingRight(BaseUtil baseUtil){
        this.baseUtil = baseUtil;
    }

    @And("^to test Right Click button place bus initially at ([^\\\"]*), ([^\\\"]*), ([^\\\"]*)$")
    public void toTestRightClickButtonPlaceBusInitiallyAtXAxisYAxisFace(String xAxis, String yAxis, String face){
        this.face = face;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        StepsToPlaceBus stepsToPlaceBus = new StepsToPlaceBus(baseUtil);
        stepsToPlaceBus.placeBusAtXAxisYAxisFace(xAxis,yAxis,face);
        stepsToPlaceBus.clickPlace();
    }

    @And("^click right$")
    public void clickRight() {
        try {
            BusInCarPark busInCarPark = new BusInCarPark(baseUtil.Driver);
            busInCarPark.clickRotateToRight();
            if (face.equalsIgnoreCase("North")) {
                faceAfterRightClick = "east";
            } else if (face.equalsIgnoreCase("West")) {
                faceAfterRightClick = "north";
            } else if (face.equalsIgnoreCase("East")) {
                faceAfterRightClick = "south";
            } else if (face.equalsIgnoreCase("South")) {
                faceAfterRightClick = "west";
            }
        }catch(NoSuchElementException nse){
            String message = "Element not found, Unexpected behaviour";
            Assert.assertTrue(message,false);
        }

    }

    @Then("^compare actual report with expected report after right click$")
    public void compareActualReportWithExpectedReportAfterRightClick() {
        try {
            BusInCarPark busInCarPark = new BusInCarPark(baseUtil.Driver);
            busInCarPark.clickReportButton();
            expectedReport = "The bus is currently parked at X: " + xAxis + " and Y: " + yAxis + ", facing " + faceAfterRightClick;
            actualReport = busInCarPark.reportResult.getText();
            Assert.assertEquals(expectedReport, actualReport);
        }catch(NoSuchElementException nse){
            String message = "Element not found, Unexpected behaviour";
            Assert.assertTrue(message,false);
        }
    }

}
