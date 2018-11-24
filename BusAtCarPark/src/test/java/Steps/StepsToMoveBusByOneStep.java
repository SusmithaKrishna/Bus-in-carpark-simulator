package Steps;

import BaseUtil.BaseUtil;
import Pages.BusInCarPark;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;

public class StepsToMoveBusByOneStep extends BaseUtil {
    private  String xAxisAfterMove, yAxisAfterMove, face, xAxis, yAxis;
    private BaseUtil baseUtil;
    public StepsToMoveBusByOneStep(BaseUtil baseUtil){
        this.baseUtil = baseUtil;
    }
    private int convert, x, y;
    private String expectedError, expectedResultAfterMove, actualResiltAfterMove, actualError;

    @And("^place the bus at ([^\\\"]*), ([^\\\"]*), ([^\\\"]*)$")
    public void placeTheBusAtXAxisYAxisFace(String xAxis, String yAxis, String face){
        this.face = face;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        StepsToPlaceBus stepsToPlaceBus = new StepsToPlaceBus(baseUtil);
        stepsToPlaceBus.placeBusAtXAxisYAxisFace(xAxis,yAxis,face);
        stepsToPlaceBus.clickPlace();
    }
    @And("^click move$")
    public void clickMove() {
        try {
            BusInCarPark busInCarPark = new BusInCarPark(baseUtil.Driver);
            busInCarPark.clickMove();
            if (face.equalsIgnoreCase("North")) {
                xAxisAfterMove = xAxis;
                convert = Integer.parseInt(yAxis) + 1;
                yAxisAfterMove = Integer.toString(convert);
            } else if (face.equalsIgnoreCase("West")) {
                yAxisAfterMove = yAxis;
                convert = Integer.parseInt(xAxis) - 1;
                xAxisAfterMove = Integer.toString(convert);
            } else if (face.equalsIgnoreCase("East")) {
                yAxisAfterMove = yAxis;
                convert = Integer.parseInt(xAxis) + 1;
                xAxisAfterMove = Integer.toString(convert);
            } else if (face.equalsIgnoreCase("South")) {
                xAxisAfterMove = xAxis;
                convert = Integer.parseInt(yAxis) - 1;
                yAxisAfterMove = Integer.toString(convert);
            }
        }catch(NoSuchElementException nse){
            String message = "Element not found, Unexpected behaviour";
            Assert.assertTrue(message,false);
        }
    }
    @Then("^compare actual report with expected report when moved$")
    public void compareActualReportWithExpectedReportWhenMoved() {
            BusInCarPark busInCarPark = new BusInCarPark(baseUtil.Driver);
            x = Integer.parseInt(xAxisAfterMove);
            y = Integer.parseInt(yAxisAfterMove);
            char value = face.charAt(0);
            switch (value) {
                case 'n':
                    if ((Integer.parseInt(yAxis) == 4) || y > 4) {
                        try{
                        actualError = busInCarPark.reportError.getText();
                        expectedError = "You can’t go further north! Please stay in the carpark.";
                        Assert.assertEquals("Unexpected behaviour for the move command in the direction "+face,expectedError, actualError);
                        }catch(NoSuchElementException ese){
                            String message = "Unexpected Behaviour found";
                            Assert.assertTrue(message,false);
                        } catch (Exception e){
                            e.printStackTrace();
                        }
                    } else {
                            busInCarPark.clickReportButton();
                            expectedResultAfterMove = "The bus is currently parked at X: " + xAxisAfterMove + " and Y: " + yAxisAfterMove + ", facing " + face;
                            actualResiltAfterMove = busInCarPark.reportResult.getText();
                            Assert.assertEquals("Expected result is " + expectedResultAfterMove + " ,but actual result is " + actualResiltAfterMove, expectedResultAfterMove, actualResiltAfterMove);
                    }
                    break;

                case 'e':
                    if ((Integer.parseInt(xAxis) == 4) || x > 4) {
                        try{
                        actualError = busInCarPark.reportError.getText();
                        expectedError = "You can’t go further east! Please stay in the carpark.";
                        Assert.assertEquals("Unexpected behaviour for the move command in the direction "+face, expectedError, actualError);
                        }catch(NoSuchElementException ese){
                            String message = "Unexpected Behaviour found";
                            Assert.assertTrue(message,false);
                        } catch (Exception e){
                            e.printStackTrace();
                        }
                    } else {
                            busInCarPark.clickReportButton();
                            expectedResultAfterMove = "The bus is currently parked at X: " + xAxisAfterMove + " and Y: " + yAxisAfterMove + ", facing " + face;
                            actualResiltAfterMove = busInCarPark.reportResult.getText();
                            Assert.assertEquals("Expected result is " + expectedResultAfterMove + " ,but actual result is " + actualResiltAfterMove, expectedResultAfterMove, actualResiltAfterMove);
                    }
                    break;

                case 's':
                    if ((Integer.parseInt(yAxis) == 0) || y < 0) {
                        try {
                            actualError = busInCarPark.reportError.getText();
                            expectedError = "You can’t go further south! Please stay in the carpark.";
                            Assert.assertEquals("Unexpected behaviour for the move command in the direction " + face, expectedError, actualError);
                        }catch(NoSuchElementException ese){
                            String message = "Unexpected Behaviour found";
                            Assert.assertTrue(message,false);
                        } catch (Exception e){
                            e.printStackTrace();
                        }
                    } else {
                            busInCarPark.clickReportButton();
                            expectedResultAfterMove = "The bus is currently parked at X: " + xAxisAfterMove + " and Y: " + yAxisAfterMove + ", facing " + face;
                            actualResiltAfterMove = busInCarPark.reportResult.getText();
                            Assert.assertEquals("Expected result is " + expectedResultAfterMove + " ,but actual result is " + actualResiltAfterMove, expectedResultAfterMove, actualResiltAfterMove);
                    }
                    break;
                case 'w':
                    if ((Integer.parseInt(xAxis) == 0) || x < 0) {
                        try{
                        actualError = busInCarPark.reportError.getText();
                        expectedError = "You can’t go further west! Please stay in the carpark.";
                        Assert.assertEquals("Unexpected behaviour for the move command in the direction "+face, expectedError, actualError);
                        }catch(NoSuchElementException ese){
                            String message = "Unexpected Behaviour found";
                            Assert.assertTrue(message,false);
                        } catch (Exception e){
                            e.printStackTrace();
                        }
                    } else {
                            busInCarPark.clickReportButton();
                            expectedResultAfterMove = "The bus is currently parked at X: " + xAxisAfterMove + " and Y: " + yAxisAfterMove + ", facing " + face;
                            actualResiltAfterMove = busInCarPark.reportResult.getText();
                            Assert.assertEquals("Expected result is " + expectedResultAfterMove + " ,but actual result is " + actualResiltAfterMove, expectedResultAfterMove, actualResiltAfterMove);
                    }
                    break;
            }
    }

}
