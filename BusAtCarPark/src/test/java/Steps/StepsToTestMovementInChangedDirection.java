package Steps;

import BaseUtil.BaseUtil;
import Pages.BusInCarPark;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;

public class StepsToTestMovementInChangedDirection extends BaseUtil{

    private BaseUtil baseUtil;
    private  String faceAfterClick;
    private String face;
    private String xAxis;
    private String yAxis;
    private String actualReport, actualError;
    private String expectedReport, expectedError;
    private String direction;
    private String xAxisAfterMove;
    private String yAxisAfterMove;
    int convert, x, y;
    public StepsToTestMovementInChangedDirection(BaseUtil baseUtil){
        this.baseUtil = baseUtil;
    }
    @And("^to test movement of bus after changing direction place bus initially at ([^\\\"]*), ([^\\\"]*), ([^\\\"]*)$")
    public void toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String xAxis, String yAxis, String face) {
        this.face = face;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        StepsToPlaceBus stepsToPlaceBus = new StepsToPlaceBus(baseUtil);
        stepsToPlaceBus.placeBusAtXAxisYAxisFace(xAxis,yAxis,face);
        stepsToPlaceBus.clickPlace();
    }

    @And("^click the ([^\\\"]*)$")
    public void clickTheDirection(String direction) {
       this.direction = direction;
        BusInCarPark busInCarPark = new BusInCarPark(baseUtil.Driver);
           if(direction.equalsIgnoreCase("left")) {
                busInCarPark.clickRotateToLeft();
               if (face.equalsIgnoreCase("North")) {
                   faceAfterClick = "west";
               } else if (face.equalsIgnoreCase("West")) {
                   faceAfterClick = "south";
               } else if (face.equalsIgnoreCase("East")) {
                   faceAfterClick = "north";
               } else if (face.equalsIgnoreCase("South")) {
                   faceAfterClick = "east";
               }
           }
           else{
               busInCarPark.clickRotateToRight();
               if(face.equalsIgnoreCase("North")){
                   faceAfterClick = "east";
               }
               else if(face.equalsIgnoreCase("West")){
                   faceAfterClick = "north";
               }
               else if(face.equalsIgnoreCase("East")){
                   faceAfterClick = "south";
               }
               else if(face.equalsIgnoreCase("South")){
                   faceAfterClick = "west";
               }
           }
    }

    @And("^move the bus in defined direction$")
    public void moveTheBusInDefinedDirection() {
        BusInCarPark busInCarPark = new BusInCarPark(baseUtil.Driver);
        busInCarPark.clickMove();
        if(faceAfterClick.equalsIgnoreCase("North")){
            xAxisAfterMove = xAxis;
            convert = Integer.parseInt(yAxis)+1;
            yAxisAfterMove = Integer.toString(convert);
        }
        else if(faceAfterClick.equalsIgnoreCase("West")){
            yAxisAfterMove = yAxis;
            convert = Integer.parseInt(xAxis)-1;
            xAxisAfterMove = Integer.toString(convert);
        }
        else if(faceAfterClick.equalsIgnoreCase("East")){
            yAxisAfterMove = yAxis;
            convert = Integer.parseInt(xAxis)+1;
            xAxisAfterMove = Integer.toString(convert);
        }
        else if(faceAfterClick.equalsIgnoreCase("South")){
            xAxisAfterMove = xAxis;
            convert = Integer.parseInt(yAxis)-1;
            yAxisAfterMove = Integer.toString(convert);
        }
    }

    @Then("^compare actual report with expected report after moving in the direction$")
    public void compareActualReportWithExpectedReportAfterMovingInTheDirection(){
            BusInCarPark busInCarPark = new BusInCarPark(baseUtil.Driver);
            x = Integer.parseInt(xAxisAfterMove);
            y = Integer.parseInt(yAxisAfterMove);
            char value = faceAfterClick.charAt(0);
            switch (value) {
                case 'n':
                    if ((Integer.parseInt(yAxis) == 4) || y > 4) {
                        try {
                            actualError = busInCarPark.reportError.getText();
                            expectedError = "You can’t go further north! Please stay in the carpark.";
                            Assert.assertEquals("Unexpected behaviour for the move command in the direction " + faceAfterClick, expectedError, actualError);
                        }catch (NoSuchElementException nse){
                            String message = "Unexpected behaviour";
                            Assert.assertTrue(message,false);
                        }
                    } else {
                            busInCarPark.clickReportButton();
                            expectedReport = "The bus is currently parked at X: " + xAxisAfterMove + " and Y: " + yAxisAfterMove + ", facing " + faceAfterClick;
                            actualReport = busInCarPark.reportResult.getText();
                            Assert.assertEquals("Expected result is " + expectedReport + " ,but actual result is " + actualReport, expectedReport, actualReport);

                    }
                    break;
                case 'e':

                    if ((Integer.parseInt(xAxis) == 4) || x > 4) {
                        try {
                            actualError = busInCarPark.reportError.getText();
                            expectedError = "You can’t go further east! Please stay in the carpark.";
                            Assert.assertEquals("Unexpected behaviour for the move command in the direction " + faceAfterClick, expectedError, actualError);
                        }catch (NoSuchElementException nse){
                            String message = "Unexpected behaviour";
                            Assert.assertTrue(message,false);
                        }
                    } else {
                            busInCarPark.clickReportButton();
                            expectedReport = "The bus is currently parked at X: " + xAxisAfterMove + " and Y: " + yAxisAfterMove + ", facing " + faceAfterClick;
                            actualReport = busInCarPark.reportResult.getText();
                            Assert.assertEquals("Expected result is " + expectedReport + " ,but actual result is " + actualReport, expectedReport, actualReport);
                    }
                    break;

                case 's':

                    if ((Integer.parseInt(yAxis) == 0) || y < 0) {
                        try {
                            actualError = busInCarPark.reportError.getText();
                            expectedError = "You can’t go further south! Please stay in the carpark.";
                            Assert.assertEquals("Unexpected behaviour for the move command in the direction " + faceAfterClick, expectedError, actualError);
                        }catch (NoSuchElementException nse){
                            String message = "Unexpected behaviour";
                            Assert.assertTrue(message,false);
                        }
                    } else {
                            busInCarPark.clickReportButton();
                            expectedReport = "The bus is currently parked at X: " + xAxisAfterMove + " and Y: " + yAxisAfterMove + ", facing " + faceAfterClick;
                            actualReport = busInCarPark.reportResult.getText();
                            Assert.assertEquals("Expected result is " + expectedReport + " ,but actual result is " + actualReport, expectedReport, actualReport);
                    }
                    break;


                case 'w':
                        if ((Integer.parseInt(xAxis) == 0) || x < 0) {
                            try {
                                actualError = busInCarPark.reportError.getText();
                                expectedError = "You can’t go further west! Please stay in the carpark.";
                                Assert.assertEquals("Unexpected behaviour for the move command in the direction " + faceAfterClick, expectedError, actualError);
                            }catch (NoSuchElementException nse) {
                                String message = "Unexpected behaviour";
                                Assert.assertTrue(message, false);
                            }
                        } else {
                            busInCarPark.clickReportButton();
                            expectedReport = "The bus is currently parked at X: " + xAxisAfterMove + " and Y: " + yAxisAfterMove + ", facing " + faceAfterClick;
                            actualReport = busInCarPark.reportResult.getText();
                            Assert.assertEquals("Expected result is " + expectedReport + " ,but actual result is " + actualReport, expectedReport, actualReport);
                        }
                        break;
            }
    }


}
