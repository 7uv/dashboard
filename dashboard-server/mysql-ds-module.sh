# run the following inside jboss-cli
# to add mysql driver
# also place the driver folder under modules directory
# Author Sayantan Ghosh
/subsystem=datasources/jdbc-driver=mysql:add(driver-name=mysql,driver-module-name=com.mysql,driver-xa-datasource-class-name=com.mysql.cj.jdbc.MysqlXADataSource)
